import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    //     Konva.Image.fromURL('https://takeoff.efitosolutions.com/api/public/file/6421487f1349a1cee9c8300e', function (darthNode) {
    //     darthNode.setAttrs({
    //       x: 0,
    //       y: 0,
    //       scaleX: 0.5,
    //       scaleY: 0.5,
    //     });
    //     layer.add(darthNode);
    //   });

    var imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        draggable: true,
      });

      // add the shape to the layer
      layer.add(yoda);
    };
    imageObj.src = 'https://takeoff.efitosolutions.com/api/public/file/6421487f1349a1cee9c8300e';

    //   var circle = new Konva.Image({
    //     x: stage.width() / 2,
    //     y: stage.height() / 2,
    //     radius: 50,
    //     fill: 'green',
    //   });
    //   layer.add(circle);

    var scaleBy = 2;
    stage.on('wheel', (e) => {
      // stop default scrolling
      e.evt.preventDefault();

      var oldScale = stage.scaleX();
      var pointer = stage.getPointerPosition();
      if (pointer) {
        var mousePointTo = {
          x: (pointer.x - stage.x()) / oldScale,
          y: (pointer.y - stage.y()) / oldScale,
        };

        // how to scale? Zoom in? Or zoom out?
        let direction = e.evt.deltaY > 0 ? 1 : -1;

        // when we zoom on trackpad, e.evt.ctrlKey is true
        // in that case lets revert direction
        if (e.evt.ctrlKey) {
          direction = -direction;
        }

        var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        stage.scale({ x: newScale, y: newScale });

        var newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        stage.position(newPos);
      }
    });
  }
}
