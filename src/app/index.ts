import * as Generator from 'yeoman-generator';

// tslint:disable-next-line:no-default-export
export default class Udutha extends Generator {

  // TODO Define or figure Out types
  // tslint:disable-next-line:no-any
  constructor(args: any, opts: any) {
    super(args, opts);
    this.log('Configured GTS...');
  }

  initialize(): void {
    this.log('Do something...');
  }
}
