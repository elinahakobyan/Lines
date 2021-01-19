const { resolve } = require('path');
const { readdirSync, readFileSync, writeFileSync, statSync } = require('fs-extra');
const { execSync } = require('child_process');
const { input, output, name: className, type: fileType } = require('minimist')(process.argv.slice(2));

function getFilePaths(dir) {
  const subdirs = readdirSync(dir);
  const files = subdirs.map(subdir => {
    const res = resolve(dir, subdir);
    return statSync(res).isDirectory() ? getFilePaths(res) : res;
  });
  return files.reduce((a, f) => a.concat(f), []);
}

function getContentFromPath(path) {
  return readFileSync(path, { encoding: 'utf8' });
}

function getContentsAfterKeyword(str, regex) {
  let result;
  const ii = [];

  while ((result = regex.exec(str))) {
    ii.push(result.index);
  }

  return ii.map((el, i) => str.substring(el, ii[i + 1]));
}

function getGetterNames(str) {
  return getContentsAfterKeyword(str, /(?<=get[ ]{1,})([a-zA-Z_${1}][a-zA-Z0-9_$]+)(?=\()/gi).map(
    c => c.split('(').filter(name => name)[0]
  );
}

function getClassName(str) {
  return getContentsAfterKeyword(str, /class /gi).map(c => c.split(' ').filter(name => name)[1]);
}

function getClassNamesAndGetters(str) {
  const classes = getContentsAfterKeyword(str, /class /gi);
  return classes.map(c => {
    return { className: getClassName(c), getters: getGetterNames(c) };
  });
}

async function execute() {
  let out = ``;
  const paths = getFilePaths(`${input}`);
  const contents = paths.map(path => getContentFromPath(path));

  for (const c of contents) {
    const entries = getClassNamesAndGetters(c);

    for (const e of entries) {
      const { className, getters } = e;

      if (!getters.length) {
        continue;
      }

      out += `  ${className}: {\n`;

      for (const g of getters) {
        const G = g[0].toUpperCase() + g.slice(1);
        out += `    ${G}Update: '${className}${G}Update',\n`;
      }

      out += `  },\n`;
    }
  }

  out = `export const ${className} = Object.freeze({\n${out}});`;

  const url = `${output}/model-events.${fileType}`;
  writeFileSync(url, out, 'utf-8');
  execSync(`npx prettier --write ${url}`);
}

execute();
