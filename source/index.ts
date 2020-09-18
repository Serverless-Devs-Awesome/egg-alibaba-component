// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Framework = require('@serverless-devs/s-framework');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import format = require('string-format');
import { DEFAULTPORT, DEFAULTSTART, DEFAULTBOOTSTRAP } from './bootstrap';

interface ProjectConfig {
  ProjectName: string;
}

interface CredentialsConfig {
  AccountID: string;
  AccessKeyID: string;
  AccessKeySecret: string;
}

interface PropertiesConfig {
  [key: string]: any
}

interface InputsContext {
  Project: ProjectConfig
  Credentials: CredentialsConfig
  Properties: PropertiesConfig
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class EggComponent extends Framework {
  constructor(id?: string) {
    super(id);
  }

  async deploy(inputs: InputsContext) {
    if (!inputs.Properties.Detail) {
      inputs.Properties.Detail = {};
    }
    const { Detail = {} } = inputs.Properties;
    const frameworkInputs:any = inputs;
    frameworkInputs.Properties.Detail = {
      Function: inputs.Properties.Detail ? inputs.Properties.Detail.Function || {} : {},
      Service: inputs.Properties.Detail ? inputs.Properties.Detail.Service || {} : {}
    };
    const formatStr = {
      port: Detail.Bootstrap ? Detail.Bootstrap.Port || DEFAULTPORT : DEFAULTPORT,
      start: Detail.Bootstrap ? Detail.Bootstrap.Start || DEFAULTSTART : DEFAULTSTART
    };
    frameworkInputs.Bootstrap = format(DEFAULTBOOTSTRAP, formatStr);
    return await super.deploy(frameworkInputs);
  }

  async remove(inputs:any) {
    await super.remove(inputs);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = EggComponent;

