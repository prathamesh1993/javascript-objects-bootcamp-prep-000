var playlist = {akon : ["song a","song b", "song c"]}

function updatePlaylist(the_playlist,name,song_name){
  the_playlist[name]=song_name
  return the_playlist
}

function removeFromPlaylist(playlist,name){
  delete playlist.name
  return playlist
}