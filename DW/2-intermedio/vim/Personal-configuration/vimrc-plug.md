❯ cat .vimrc.plug 
call plug#begin('~/.vim/plugged')

  " Fugitive Vim GitHub Wrapper
  Plug 'tpope/vim-fugitive'
 
  " Syntax
  Plug 'sheerun/vim-polyglot'

  " Tree
  Plug 'preservim/nerdtree'

  " Themes
  Plug 'itchyny/lightline.vim'

  let g:lightline = {
   \ 'colorscheme': 'wombat',
   \ }

  " Typing
  Plug 'jiangmiao/auto-pairs'
  Plug 'alvan/vim-closetag' " HTML/React
  Plug 'tpope/vim-surround'

  " Autocomplete
  " Plug 'sirver/ultisnips'
  Plug 'neoclide/coc.nvim', {'branch': 'release'}

  " IDE
  Plug 'mhinz/vim-signify'  
  Plug 'yggdroot/indentline'
  Plug 'scrooloose/nerdcommenter'

call plug#end()