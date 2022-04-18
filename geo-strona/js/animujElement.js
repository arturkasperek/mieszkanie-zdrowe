function animujElement()
{
    this.errorElement   = undefined;
    this.element        = undefined;
    this.posStart       = new Number();
    this.posStop        = new Number();
    this.parametr       = undefined;
    this.posThis        = new Number();
    this.interval       = new Number();
    
    this.isAnimated     = false;
    this.isShown        = false;
    this.doNext         = false;

    this.step           = 5;
    this.stepTime       = 8;

    this.errorArray     = new Array();
    this.errorArray[1]  = 'Nie znaleziono elementu do animowania';
    this.errorArray[2]  = 'Wartoœæ animowana nie zosta³a podana, lub  jest ona niezdefiniowana w elemencie';
    this.errorArray[3]  = 'Koñcowa wartoœæ parametru nie zosta³a podana';

    this.przygotujDane = function(INelementName, INstartValue, INendValue, INparametr, INkomunikatElement)
    {
        

        if( INkomunikatElement!=undefined && document.getElementById(INkomunikatElement) )
            this.errorElement = document.getElementByid(INkomunikatElement);

        if( document.getElementById(INelementName) )
           this.element = document.getElementById(INelementName);
       else
           this.error(1);

       if( INparametr== undefined || this.element.style[INparametr]== undefined )
           this.error(2);
       else
       {
            this.posStart = parseInt(this.element.style[INparametr]);
            this.parametr = INparametr;
       }

       if( INstartValue ==undefined || INstartValue == null)
           this.posStart = parseInt(this.element.style[INparametr]);
       else
           this.posStart = parseInt(INstartValue);

       if( INendValue ==undefined || INendValue == null)
           this.error(3);
       else
           this.posStop = parseInt(INendValue);

       if( this.posStart>this.posStop )
           this.step *= -1;
    }

    this.error = function(INkomunikatId)
    {
        if( this.errorElement == undefined )
        {
           if( parseInt(INkomunikatId) >0  )
               alert(this.errorArray[INkomunikatId]);
           else
              alert(INkomunikatId);
        }else
        {
           if( parseInt(INkomunikatId) >0  )
               this.komunikatDiv.innerHTML += this.errorArray[INkomunikatId]+'<br>';
           else
              this.komunikatDiv.innerHTML += INkomunikatId+'<br>';
        }
    }

    this.calculateStep = function(INpresent, INmax, INstep)
    {
        //var stepLeft = (INstep>0)?((INmax - INpresent) / INstep) : (INpresent / Math.abs(INstep));

        //element.innerHTML += nr+' '+Math.sin(nr)+'<br>';
        return INpresent+INstep;//INstep;
    }

    /*
        isShown = false                         true                        false
                    |--------------------------> |--------------------------->|
     isAnimated = false       true              false          true          false
     */

    this.animuj = function(INaction)
    {
        
        if( this.isAnimated == true  )
        {
            if( this.isShown==false && INaction=='hide' )
                this.doNext = true;
            else if( this.isShown==true && INaction=='show' )
                this.doNext = true;
            else
                this.doNext = false;

        }else // animacja zatrzymana
        {
            if( this.isShown==false && INaction=='show' )
                this.animacja('show');
            else if( this.isShown==true && INaction=='hide' )
                this.animacja('hide');
        }
    }

    this.animacja = function(INdirection)
    {
        var self = this;
        switch(INdirection)
        {
           case 'show':
               this.posThis = this.posStart;
               this.isAnimated = true;
               this.interval = setInterval(function(){self.nextStep(self.posStart, self.posStop, self.step )},this.stepTime);
           break;
           case 'hide':
               this.isAnimated = true;
               this.posThis = this.posStop;
               this.interval = setInterval(function(){self.nextStep(self.posStop, self.posStart, (self.step*-1) )},this.stepTime);
           break;
        }
    }

    this.nextStep = function(INstartPos, INstopPos, INstep)
    {

        if( INstep>0 )
        {
            this.posThis += INstep;

            if( this.posThis<=INstopPos)
                this.element.style[this.parametr] = this.posThis+'px';
            else
            {
                this.isAnimated = false;
                clearInterval(this.interval);
                this.isShown = (this.isShown==true)?false:true;
                if( this.doNext == true )
                    this.animacja( (this.isShown==true)?'hide':'true'  );
                
            }
        }else
        {
            
            this.posThis += INstep;

            if( this.posThis>=INstopPos)
                this.element.style[this.parametr] = this.posThis+'px';
            else
            {
                this.isAnimated = false;
                clearInterval(this.interval);
                this.isShown = (this.isShown==true)?false:true;
                if( this.doNext == true )
                    this.animacja( (this.isShown==true)?'hide':'true'  );

            }

        }
    }

    //this.przygotujDane(INelementName, INstartvalue, INendValue, INkindValue, INkomunikatElement);


}