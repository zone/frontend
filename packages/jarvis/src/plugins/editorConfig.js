const { addFile } = require('../install')
const createPlugin = require('../util/createPlugin')

const content = `# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false`

module.exports = createPlugin({
  id: 'editorConfig',
  name: 'Editor config',
  actions: () => {
    addFile({ fileName: '.editorConfig', content })
  },
})
