document.write( '<!-- CSS  -->\n' );
document.write( ' <link href=\"https://vjs.zencdn.net/7.2.3/video-js.css\" rel=\"stylesheet\">\n' );
document.write( '<!-- HTML -->\n' );
document.write( '<video id=\'hls-example\'  class=\"video-js vjs-default-skin\" width=\"400\" height=\"300\" controls>\n' );
document.write( '<source type=\"application/x-mpegURL\" src=\"http://www.streambox.fr/playlists/test_001/stream.m3u8\">\n' );
document.write( '</video>\n' );
document.write( '<!-- JS code -->\n' );
document.write( '<!-- If you\'d like to support IE8 (for Video.js versions prior to v7) -->\n' );
document.write( '<script src=\"https://vjs.zencdn.net/ie8/ie8-version/videojs-ie8.min.js\"></script>\n' );
document.write( '<script src=\"https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.14.1/videojs-contrib-hls.js\"></script>\n' );
document.write( '<script src=\"https://vjs.zencdn.net/7.2.3/video.js\"></script>\n' );
document.write( '<script>\n' );
document.write( 'var player = videojs(\'hls-example\');\n' );
document.write( 'player.play();\n' );
document.write( '</script>' );
