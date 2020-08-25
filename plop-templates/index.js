module.exports = {
  description: 'generate a rfc',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
    },
  ],
  actions() {
    const name = '{{properCase name}}'
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/index.tsx`,
        templateFile: 'plop-templates/components/index.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/components/${name}/style/index.scss`,
        templateFile: 'plop-templates/scss/index.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/components/${name}/demo/basic.tsx`,
        templateFile: 'plop-templates/demo/index.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/components/${name}/index.en-US.md`,
        templateFile: 'plop-templates/doc/en.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/components/${name}/index.zh-CN.md`,
        templateFile: 'plop-templates/doc/zh.hbs',
        data: {
          name,
        },
      },
    ]
    return actions
  },
}
