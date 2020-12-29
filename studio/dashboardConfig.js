export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feb885367f96891ff6f4783',
                  title: 'Sanity Studio',
                  name: 'pappalagermat-studio',
                  apiId: '4dde3dc6-cb3e-4c47-98ea-0b1beff23ad0'
                },
                {
                  buildHookId: '5feb8853e25dc682b9379989',
                  title: 'Blog Website',
                  name: 'pappalagermat',
                  apiId: 'c36e1611-4d3b-494b-9e4a-1cf84e763b2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Brattus/pappalagermat',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pappalagermat.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
