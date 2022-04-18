function animateWindow(INwindowId)
{
    this.windowId           = INwindowId;
    this.windowObj          = null;
    this.windowContainerId  = 'zwindowContainer';
    this.windowContainerObj = null;
    this.windowWyrownanieId = 'zwindowWyrownanie';
    this.windowTrescId      = 'zwindowTresc';
    this.counterMax         = 100;
    this.counterMaxOverlay  = 40;
    this.count              = 0;
    this.counterMin         = 0;
    this.timeId             = null;
    this.step               = 10;
    this.stepTime           = 10;
    this.overlayId          = 'zwindowOverlayLayer';
    this.overlayObj         = null;
    this.afterFunction      = null;
    
    this.setAfterFunction = function(INafterFunction)
    {
        this.afterFunction = INafterFunction;
    }

    this.animuj = function()
    {
        if( document.getElementById(this.overlayId) )
            this.hideWindow();
        else
            this.showWindow();
    }

    this.wlacz = function()
    {
        if( document.getElementById(this.overlayId) )
            this.hideFastWindow();
        else
            this.showFastWindow();
    }



    this.opacity = function()
    {
        if(  this.step!=0 )
        {
            if( (this.step>0 && this.count<=this.counterMax) || (this.step<0 && this.count>=this.counterMin) )
                this.changeOpacity(this.count);
            else
            {
                clearInterval(this.timeId);
                this.opacityAfter();
            }
        }
    }

    this.changeOpacity = function(INvalue)
    {
        var overlayValue = (INvalue<this.counterMaxOverlay)?INvalue:this.counterMaxOverlay;

        if(navigator.appName == "Microsoft Internet Explorer")
        {
            this.overlayObj.style.filter = "alpha(opacity="+(overlayValue)+")";
            this.windowContainerObj.style.filter = "alpha(opacity="+(INvalue)+")";
            
        }else
        {
            this.overlayObj.style.opacity = (overlayValue/100);
            this.windowContainerObj.style.opacity = (INvalue/100);
        }

        if( INvalue>0 )
        {
            if( this.windowTrescId!=null && document.getElementById(this.windowTrescId) )
                document.getElementById(this.windowTrescId).style.visibility = 'visible';
            
            this.windowObj.style.visibility = 'visible';
            this.windowObj.style.display = 'block';
        }
        this.count += this.step;
    }

    this.switchSelect = function(INkind)
    {
        var listy = document.getElementsByTagName('select');

        for( var nr=0; nr<listy.length; nr++ )
            listy[nr].style.visibility = (INkind=='hide')?'hidden':'visible';
    }

    this.showWindow = function()
    {
        this.windowCreate();
        this.switchSelect('hide');
        
        this.count = this.counterMin;

        if( this.step < 0 )
            this.step *= -1;

        var self = this;
        this.timeId = setInterval(function(){self.opacity()},this.stepTime);
    }

    this.showFastWindow = function()
    {
        this.windowCreate();
        this.switchSelect('hide');

        if( this.step < 0 )
            this.step *= -1;

        this.changeOpacity(this.counterMax);
        this.opacityAfter();
    }

    this.hideFastWindow = function()
    {
        if( document.getElementById(this.overlayId) )
        {
            this.overlayObj = document.getElementById(this.overlayId);
            this.windowContainerObj = document.getElementById(this.windowContainerId);
            this.windowObj = document.getElementById(this.windowId);

            this.count = this.counterMax;

            if( this.step > 0 )
                this.step *= -1;

            var self = this;
            this.changeOpacity(this.counterMin);
            this.opacityAfter();
            
        }else
            alert('BLAD: brak obiektu '+this.overlayId);


        
    }


    this.hideWindow = function()
    {
        if( document.getElementById(this.overlayId) )
        {
            this.overlayObj = document.getElementById(this.overlayId);
            this.windowContainerObj = document.getElementById(this.windowContainerId);
            this.windowObj = document.getElementById(this.windowId);

            this.count = this.counterMax;
            
            if( this.step > 0 )
                this.step *= -1;

            var self = this;
            this.timeId = setInterval(function(){self.opacity()},this.stepTime);

        }else
            alert('BLAD: brak obiektu '+this.overlayId);
    }

    this.opacityAfter = function()
    {
        if( this.step>0 ) // pojawialo sie
        {

        }else if( this.step<0 ) // znikalo
        {
            this.windowDrop();
            this.switchSelect('show');
        }

        if( this.afterFunction != null )
            this.afterFunction();
    }

    this.windowCreate = function()
    {
        // generowanie obiektu overlay zaslaniajacego strone
        this.overlayObj = document.createElement('div');
        this.overlayObj.setAttribute('id', this.overlayId);
        document.body.appendChild(this.overlayObj);

        // generowanie kontenera do przechowywania okna
        this.windowContainerObj = document.createElement('div');
        this.windowContainerObj.setAttribute('id', this.windowContainerId);

        // generowanie obiektu wyrownujacego w pionie
        var wyrownanieObj = document.createElement('div');
        wyrownanieObj.setAttribute('id', this.windowWyrownanieId);

        // generowanie obiekty wyruwnujacego w poziomie, pojemnika na tresc
        var trescObj = document.createElement('div');
        trescObj.setAttribute('id', this.windowTrescId);

        // wklejanie kolejnych obiektow
        wyrownanieObj.appendChild(trescObj);
        this.windowContainerObj.appendChild(wyrownanieObj);
        document.body.appendChild(this.windowContainerObj);

        // wklekjanie okna do szkieletu okna
        this.windowObj = document.getElementById(this.windowId);
        trescObj.appendChild(this.windowObj);
    }

    this.windowDrop = function()
    {
        this.windowObj.style.display = 'none';
        this.windowObj.style.visibility = 'hidden';

        document.body.appendChild(this.windowObj);
        document.body.removeChild(document.getElementById(this.overlayId));
        document.body.removeChild(document.getElementById(this.windowContainerId));
    }
}
