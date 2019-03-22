import { writeFileSync } from 'fs';
import { ensureDirSync } from 'fs-extra';
import { IOptions, IReporter } from '..';
import { IClone } from '../interfaces/clone.interface';
import { getPath } from '../utils';
import { getOption } from '../utils/options';
import { hostname } from 'os';

export class JunitReporter implements IReporter {
  constructor(private options: IOptions) { }

  public attach(): void { }

  public report(clones: IClone[]) {
    let now: Date = new Date();
    let xmlDoc: string = '<?xml version="1.0" encoding="UTF-8" ?>';

    xmlDoc = this.options.xslHref
      ? xmlDoc + '<?xml-stylesheet type="text/xsl" href="' + this.options.xslHref + '"?>'
      : xmlDoc;
    xmlDoc += `\n<testsuites>`;

    if (clones.length > 0) {
      let groupedClones: any = groupBy(clones, (x: IClone) => x.format);
      for (let key in groupedClones) {
        let group = groupedClones[key];
        xmlDoc += `\n  <testsuite id="1" timestamp="${now.toISOString()}" hostname="${hostname()}" errors="0" time="0" package="jscpd" name="${key}" tests="${groupedClones[key].length}" failures="${groupedClones[key].length}">`
        group.forEach((clone: IClone) => {
          let message: string;
          if (clone.duplicationA.sourceId === clone.duplicationB.sourceId) {
            message = getPath(this.options, clone.duplicationA.sourceId);
          } else {
            message = `${getPath(this.options, clone.duplicationA.sourceId)} --- ${getPath(this.options, clone.duplicationB.sourceId)}`;
          }
          xmlDoc += `
    <testcase name="name" classname="classname" time="0">
      <failure message="${message}}" type="duplicate">"${duplicationToString(clone.duplicationA, clone.duplicationB)}"</failure>
    </testcase>`;
        });
        xmlDoc += '\n  </testsuite>'
      }
    }
    xmlDoc += '\n</testsuites>';
    console.log(xmlDoc);
    ensureDirSync(getOption('output', this.options));
    writeFileSync(getOption('output', this.options) + '/jscpd-report.xml', xmlDoc);
  }
}

export const duplicationToString = (dA: any, dB: any) => {
  return "test"
  return `${JSON.stringify({ A: dA, B: dB })}`
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

/**
* Group object array by property
 * Example, groupBy(array, ( x: Props ) => x.id );
 * @param array
 * @param property
 * https://stackoverflow.com/a/53632546
 */
export const groupBy = <T>(array: Array<T>, property: (x: T) => string): { [key: string]: Array<T> } =>
  array.reduce((memo: { [key: string]: Array<T> }, x: T) => {
    if (!memo[property(x)]) {
      memo[property(x)] = [];
    }
    memo[property(x)].push(x);
    return memo;
  }, {});

