// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { Metronome, ClientOptions } from '@metronome/sdk';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Metronome } from "@metronome/sdk";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Metronome)`
    : `const run: (${functionSource.client}: Metronome) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.v2.contracts.edit',
    'client.v2.contracts.editCommit',
    'client.v2.contracts.editCredit',
    'client.v2.contracts.getEditHistory',
    'client.v2.contracts.list',
    'client.v2.contracts.retrieve',
    'client.v1.alerts.archive',
    'client.v1.alerts.create',
    'client.v1.plans.getDetails',
    'client.v1.plans.list',
    'client.v1.plans.listCharges',
    'client.v1.plans.listCustomers',
    'client.v1.creditGrants.create',
    'client.v1.creditGrants.edit',
    'client.v1.creditGrants.list',
    'client.v1.creditGrants.listEntries',
    'client.v1.creditGrants.void',
    'client.v1.pricingUnits.list',
    'client.v1.customers.archive',
    'client.v1.customers.archiveBillingConfigurations',
    'client.v1.customers.create',
    'client.v1.customers.list',
    'client.v1.customers.listBillableMetrics',
    'client.v1.customers.listCosts',
    'client.v1.customers.previewEvents',
    'client.v1.customers.retrieve',
    'client.v1.customers.retrieveBillingConfigurations',
    'client.v1.customers.setBillingConfigurations',
    'client.v1.customers.setIngestAliases',
    'client.v1.customers.setName',
    'client.v1.customers.updateConfig',
    'client.v1.customers.alerts.list',
    'client.v1.customers.alerts.reset',
    'client.v1.customers.alerts.retrieve',
    'client.v1.customers.plans.add',
    'client.v1.customers.plans.end',
    'client.v1.customers.plans.list',
    'client.v1.customers.plans.listPriceAdjustments',
    'client.v1.customers.invoices.addCharge',
    'client.v1.customers.invoices.list',
    'client.v1.customers.invoices.listBreakdowns',
    'client.v1.customers.invoices.retrieve',
    'client.v1.customers.invoices.retrievePdf',
    'client.v1.customers.billingConfig.create',
    'client.v1.customers.billingConfig.delete',
    'client.v1.customers.billingConfig.retrieve',
    'client.v1.customers.commits.create',
    'client.v1.customers.commits.list',
    'client.v1.customers.commits.updateEndDate',
    'client.v1.customers.credits.create',
    'client.v1.customers.credits.list',
    'client.v1.customers.credits.updateEndDate',
    'client.v1.customers.namedSchedules.retrieve',
    'client.v1.customers.namedSchedules.update',
    'client.v1.dashboards.getEmbeddableURL',
    'client.v1.usage.ingest',
    'client.v1.usage.list',
    'client.v1.usage.listWithGroups',
    'client.v1.usage.search',
    'client.v1.auditLogs.list',
    'client.v1.customFields.addKey',
    'client.v1.customFields.deleteValues',
    'client.v1.customFields.listKeys',
    'client.v1.customFields.removeKey',
    'client.v1.customFields.setValues',
    'client.v1.billableMetrics.archive',
    'client.v1.billableMetrics.create',
    'client.v1.billableMetrics.list',
    'client.v1.billableMetrics.retrieve',
    'client.v1.services.list',
    'client.v1.invoices.regenerate',
    'client.v1.invoices.void',
    'client.v1.contracts.addManualBalanceEntry',
    'client.v1.contracts.amend',
    'client.v1.contracts.archive',
    'client.v1.contracts.create',
    'client.v1.contracts.createHistoricalInvoices',
    'client.v1.contracts.getNetBalance',
    'client.v1.contracts.list',
    'client.v1.contracts.listBalances',
    'client.v1.contracts.retrieve',
    'client.v1.contracts.retrieveRateSchedule',
    'client.v1.contracts.retrieveSubscriptionQuantityHistory',
    'client.v1.contracts.scheduleProServicesInvoice',
    'client.v1.contracts.setUsageFilter',
    'client.v1.contracts.updateEndDate',
    'client.v1.contracts.products.archive',
    'client.v1.contracts.products.create',
    'client.v1.contracts.products.list',
    'client.v1.contracts.products.retrieve',
    'client.v1.contracts.products.update',
    'client.v1.contracts.rateCards.archive',
    'client.v1.contracts.rateCards.create',
    'client.v1.contracts.rateCards.list',
    'client.v1.contracts.rateCards.retrieve',
    'client.v1.contracts.rateCards.retrieveRateSchedule',
    'client.v1.contracts.rateCards.update',
    'client.v1.contracts.rateCards.productOrders.set',
    'client.v1.contracts.rateCards.productOrders.update',
    'client.v1.contracts.rateCards.rates.add',
    'client.v1.contracts.rateCards.rates.addMany',
    'client.v1.contracts.rateCards.rates.list',
    'client.v1.contracts.rateCards.namedSchedules.retrieve',
    'client.v1.contracts.rateCards.namedSchedules.update',
    'client.v1.contracts.namedSchedules.retrieve',
    'client.v1.contracts.namedSchedules.update',
    'client.v1.packages.archive',
    'client.v1.packages.create',
    'client.v1.packages.list',
    'client.v1.packages.listContractsOnPackage',
    'client.v1.packages.retrieve',
    'client.v1.payments.attempt',
    'client.v1.payments.cancel',
    'client.v1.payments.list',
    'client.v1.settings.upsertAvalaraCredentials',
    'client.v1.settings.billingProviders.create',
    'client.v1.settings.billingProviders.list',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Metronome({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
