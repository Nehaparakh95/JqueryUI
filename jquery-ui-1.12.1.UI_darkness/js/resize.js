$(init);

function init()
{
    $("#resizeMe").resizable();

    $("div").addClass("ui-widget")
            .addClass("ui-widget-content")
            .addClass("ui-corner-all");
    $(":header").addClass("ui-widget-header")
                .addClass("ui-corner-all");
                
    $("#selectable").selectable();

//      cloneDragMe();
      $(".dragMe").draggable();
      $(".dragMe2").draggable();
      $("#target").droppable();
            
      $("#target").bind("drop",    highlightTarget);
      $("#target").bind("dropout", resetTarget);
}

function cloneDragMe()
{
    console.log("call");
        for (i = 1; i <= 4; i++){
        zValue = 101 + i;
        xPos = 20*i;
        yPos = 80 + 20*i + "px";
        $("div:dragMe").clone()
                      .insertAfter("div:dragMe")
                      .css("left", xPos)
                      .css("top", yPos)
                      .css("zIndex", zValue)
                      .append(" #" + i-1);
    }
}

function highlightTarget(event, ui)
{
    $("#target").addClass("ui-state-highlight")
                .html("Dropped ")
                .append(ui.draggable.text());
} 

function resetTarget(event, ui)
{
    $("#target").removeClass("ui-state-highlight")
                .html("Drop on me");
}