
(function(modula){

    modula.$Grid2 = function $Grid2(selector,x,y,size,options){
        var  self = this;

        options = options || {};
        options.cellSizeX = size;
        options.cellSizeY = size;
        options.isSolid = function(x,y){
            var cell = this.getCell(x,y);
            return cell && cell.data("solid") || false;
        };

        this.grid = new modula.Grid2(x,y,options);
        this.grid.map(function(x,y,cell){
            var $cell = $("<div class='cell'></div>");
            if (!cell) {
                $cell.addClass('solid').data("solid", true);
            }
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
            $cell.setVoid = function(){ self.setVoid(x,y); };
            $cell.setSolid = function(){ self.setSolid(x,y); };
            if (options.iterator) { options.iterator.call(self,x,y,$cell); }

            return $cell;
        });
        $(selector).css({
            'overflow':'hidden',
            'width': this.grid.totalSizeX + 'px',
            'height': this.grid.totalSizeY + 'py',
        });
        this.setSolid = function(x,y){
            this.grid.getCell(x,y).addClass('solid').data("solid", true);
        };
        this.setVoid = function(x,y){
            this.grid.getCell(x,y).removeClass('solid').data("solid", false);
        };
    };

})(typeof exports === 'undefined' ? ( this['modula'] || (this['modula'] = {})) : exports );