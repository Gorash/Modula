
(function(modula){

    modula.$Grid2 = function $Grid2(selector,x,y,size){
        var  self = this;
        this.grid = new modula.Grid2(x,y,{
            cellSizeX:size,
            cellSizeY:size,
            isSolid: function(x,y){
                var cell = this.getCell(x,y);
                return cell && cell.hasClass('solid');
            }
        });
        this.grid.map(function(x,y){
            var $cell = $("<div class='cell'></div>");
            $cell.css({
                'float':  'left',
                'width':  size+'px',
                'height': size+'px',
                'text-align':'center',
                'font-size': size/4+'px',
                'line-height': size+'px',
                'color':'gray',
                'border': 'solid 1px gray',
                'box-sizing': 'border-box',
            });
            $cell.data('grid',self);
            $cell.data('x',x);
            $cell.data('y',y);
            $cell.appendTo(selector);
            $cell.click(function (ev){
                if (ev.button !== 1) return;
                if( self.grid.isSolid(x,y) ){
                    self.setVoid(x,y);
                }else{
                    self.setSolid(x,y);
                }
            });
            $cell.setVoid = function(){ self.setVoid(x,y); };
            $cell.setSolid = function(){ self.setSolid(x,y); };

            return $cell;
        });
        $(selector).css({
            'overflow':'hidden',
            'width': this.grid.totalSizeX + 'px',
            'height': this.grid.totalSizeY + 'py',
        });
        this.setSolid = function(x,y){
            this.grid.getCell(x,y).addClass('solid');
        };
        this.setVoid = function(x,y){
            this.grid.getCell(x,y).removeClass('solid');
        };
    };

})(typeof exports === 'undefined' ? ( this['modula'] || (this['modula'] = {})) : exports );