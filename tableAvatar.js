function addAvatar(player) {

  var i = 1
  while( $('#boxPlayer'+i).children().length>0 && i<=4 ) i++;

  $('#boxPlayer'+i).attr("playerId", player.id);

  $('#boxPlayer'+i).html("<div class='row fullHeight'>"+
                            "<div class='col-xs-1 col-md-1 fullHeight'>"+
                            "</div>"+
                            "<div class='col-xs-10 col-md-10 fullHeight'>"+
                              "<div class='outerDiv'>"+
                                "<div class='innerDivMiddleTableAvatar'>"+
                                  "<div class='row fullHeight'>"+
                                    "<div class='col-xs-3 col-md-3 fullHeight label label-info'>"+
                                      "<img height='80%' width='100%' src='resources/avatar.jpg'>"+
                                      "</br>"+player.name+
                                    "</div>"+
                                    "<div class='col-xs-9 col-md-9 fullHeight'>"+
                                      "<div class='fullHeight' id='cardsOfPlayer"+player.id+"'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                        "<img height='100%' src='resources/redBack.png' class='cardImgHorizontalAvatar'>"+
                                      "</div>"+
                                    "</div>"+
                                  "</div>"+
                                "</div>"+
                              "</div>"+
                            "</div>"+
                            "<div class='col-xs-1 col-md-1 fullHeight'>"+
                            "</div>"+
                          "</div>");


}