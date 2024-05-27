# Visual Studio Code

## settings.json

```json
{
  "editor.wordWrap": "on",
  "editor.tabSize": 2,
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.sideBar.location": "right",
  "editor.minimap.enabled": false,
  "editor.scrollbar.vertical": "auto",
  "editor.overviewRulerBorder": false,
  "editor.hideCursorInOverviewRuler": true,
  "editor.glyphMargin": false,
  "editor.lineNumbers": "off",
  "editor.parameterHints.enabled": false,
  "editor.cursorBlinking": "expand",
  "breadcrumbs.enabled": false,
  "editor.stickyScroll.enabled": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.linkedEditing": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.arrowParens": "always",
  "prettier.bracketSameLine": false,
  "prettier.bracketSpacing": true,
  "prettier.embeddedLanguageFormatting": "auto",
  "prettier.htmlWhitespaceSensitivity": "css",
  "prettier.insertPragma": false,
  "prettier.jsxSingleQuote": false,
  "prettier.printWidth": 80,
  "prettier.proseWrap": "preserve",
  "prettier.quoteProps": "as-needed",
  "prettier.requirePragma": false,
  "prettier.semi": true,
  "prettier.singleAttributePerLine": false,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
  "prettier.useTabs": false,
  "prettier.vueIndentScriptAndStyle": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.activityBar.location": "hidden",
  "workbench.colorTheme": "Material Theme Ocean High Contrast",
  "files.autoSave": "afterDelay",
  "editor.guides.bracketPairs": "active",

  /* Bracket Pair Colorizer */
  "workbench.colorCustomizations": {
    "editorBracketHighlight.foreground1": "#fafafa",
    "editorBracketHighlight.foreground2": "#9F51B6",
    "editorBracketHighlight.foreground3": "#F7C244",
    "editorBracketHighlight.foreground4": "#F07850",
    "editorBracketHighlight.foreground5": "#97c26c",
    "editorBracketHighlight.foreground6": "#C497D4",
    "editorBracketHighlight.unexpectedBracket.foreground": "#fb6165"
  },
  
  "editor.multiCursorModifier": "ctrlCmd"
}
```

## keybindings.json

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "ctrl+[Semicolon]",
    "command": "workbench.action.togglePanel"
  },
  {
    "key": "shift+alt+up",
    "command": "editor.action.copyLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+down",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+a",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+a",
    "command": "-editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  }
  /*  {
    "key": "ctrl+click",
    "command": "editor.action.insertCursorAtEndOfEachLineSelected",
    "when": "editorTextFocus"
  } */
]
```