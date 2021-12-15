module.exports = {
  presets: [
    ['@vue/app', { useBuiltIns: 'entry' }, '@vue/cli-plugin-babel/preset'],
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' },
    ],
  ],
}
