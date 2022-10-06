fx_version "cerulean"
game 'gta5'

author "V-Dream Development"
description "Sna Welcome"

ui_page 'web/build/index.html'

client_scripts {
  'client/main.lua',
}

server_scripts {
  'server/main.lua',
}

files {
  'web/build/index.html',
  'web/build/**/*'
}

lua54 'yes'