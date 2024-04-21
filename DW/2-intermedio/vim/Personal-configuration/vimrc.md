❯ cat .vimrc
" Set compatibility to Vim only
set nocompatible

" Automatically wrap text that extendes beyond the screen length
set wrap

" Encoding
set encoding=utf-8

" Show line numbers / Relative numbering
set number
set relativenumber

"Hybrid. Relative numbers and the current line number
set nu rnu

" Status bar
set laststatus=2

" Indentation
set autoindent
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set showmatch

" Set syntax highlighting
syntax enable
syntax on

" Match Highlighting
set hlsearch

" Incremental search
set incsearch

" Clear highlight after a search
set nohlsearch

" Others
" set cursorline

" Mouse
" set mouse=a

" Clipboard
" set clipboard=unnamed

" Ruler
set ruler

" Ignore case in searchs
set ignorecase

set numberwidth=1

" Render properly background of the color scheme
let &t_ut=''

" Disable swap files
set nobackup
set nowritebackup
set noswapfile

" Keep at least 8 lines below cursor
set scrolloff=8

" Set the splits to open at the right side and below
set splitbelow splitright

" Painting the terminal
set lazyredraw
set ttyfast

" CLI
set showcmd

" Enable visual wildmenu
set wildmenu

" Load lightline.vim
" colorscheme wombat
set background=dark

" NERDTree
map <C-b> :NERDTreeToggle<CR>

" Call the .vimrc.plug file
if filereadable(expand("~/.vimrc.plug"))
  source ~/.vimrc.plug
endif
