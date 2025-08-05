let selectBox = document.querySelector('select')
    let Main = document.querySelector('.main')
    let Ban = document.getElementById('ban1')
    let inforCon = document.getElementById('inforcon')

    let country = [
      {id:1,name:"Russia",src:"./cont/1 روسیه.png",ghare:'Europe',capital:'Moscow',text:'Russia is a bigest country in the all of world and the most of this is in Asia and the little part of this is in Europe.usually the weather it is cold.'},
      {id:2,name:"Canada",src:"./cont/2 کانادا.png",ghare:'North America',capital:'Otawa'},
      {id:3,name:"China",src:"./cont/3 چین.png",ghare:'Asia',capital:'Bejin'},
      {id:4,name:"USA",src:"./cont/4 آمریکا.png",ghare:'North America',capital:'Washington'},
      {id:5,name:"Brazil",src:"./cont/5 برزیل.png",ghare:'South America',capital:'Brazilia'},
      {id:6,name:"Australia",src:"./cont/6 استرالیا.png",ghare:'Asia',capital:'Canbera'},
      {id:7,name:"India",src:"./cont/7 هند.png",ghare:'Asia',capital:'Dehlino'},
      {id:8,name:"Argentina",src:"./cont/8 آرژانتین.png",ghare:'South America',capital:'Boenus Aires'},
      {id:9,name:"Kazaghestan",src:"./cont/9 قزاقستان.png",ghare:'Asia',capital:'Astaneh'},
      {id:10,name:"Algira",src:"./cont/10 الجزایر.png",ghare:'Africa',capital:'Aljazire'},
      {id:11,name:"Republic_Kongo",src:"./cont/11 کنگو زعیر.png",ghare:'Africa',capital:'Kinshasa'},
      {id:12,name:"SoudiArabia",src:"./cont/12 عربستان.png",ghare:'Asia',capital:'Ryiadh'},
      {id:13,name:"Mexico",src:"./cont/13 مکزیک.png",ghare:'North America',capital:'Mexico City'},
      {id:14,name:"Indonisia",src:"./cont/14 اندونزی.png",ghare:'Asia',capital:'Jakarta'},
      {id:15,name:"Soudan",src:"./cont/15 سودان.png",ghare:'Africa',capital:'Khortoom'},
      {id:16,name:"Libia",src:"./cont/16 لیبی.png",ghare:'Africa',capital:'Trables'},
      {id:17,name:"Iran",src:"./cont/17 ایران.png",ghare:'Asia',capital:'Tehran'},
      
    ]
    country.forEach(function(val)
    {
      
      let Div = document.createElement('div')
      Div.style.backgroundColor = 'black'
       Div.setAttribute('class','box')
       Div.setAttribute('id',val.ghare)
       Div.setAttribute('name',val.name)
       Div.style.display ='none'
       let img = document.createElement('img')
       img.setAttribute('class','img')
       img.setAttribute('src',val.src)
       let ptag = document.createElement('p')
       ptag.innerHTML = val.name
       ptag.style.textAlign = 'center'
       ptag.style.fontSize = '30px'
       ptag.style.color = 'white'
       ptag.style.fontWeight = 'bold'
       let ptag1 = document.createElement('p')
       let Span1 = document.createElement('span')
       Span1.innerHTML = 'capital:'
       Span1.style.fontWeight = 'bold'
       Span1.style.fontSize = '30px'
       ptag1.append(Span1)
       ptag1.innerHTML = ptag1.innerHTML + val.capital
       ptag1.style.textAlign = 'center'
       ptag1.style.fontSize = '25px'
       ptag1.style.color = 'white'
       let ptag2 = document.createElement('p')
       let Span2 = document.createElement('span')
       Span2.innerHTML = 'continent:'
       Span2.style.fontWeight = 'bold'
       Span2.style.fontSize = '28px'
       ptag2.append(Span2)
       ptag2.innerHTML = ptag2.innerHTML + val.ghare
       ptag2.style.textAlign = 'center'
       ptag2.style.fontSize = '22px'
       ptag2.style.color = 'white'
       let Btnper = document.createElement('button')
       Btnper.style.width = '86%'
       Btnper.style.height = '50px'
       Btnper.style.marginLeft = '23px'
       Btnper.style.borderRadius = '30px'
       Btnper.style.fontSize = '21px'
       Btnper.style.fontWeight = 'bold'
       Btnper.innerHTML = 'Go for more information'
       Btnper.addEventListener('click',(event)=>{
         Main.style.display = 'none'
         inforCon.innerHTML=""
         inforCon.style.cssText = "display:flex;"
         let IMG = document.createElement('img')
         IMG.style.cssText = "width:60%;height:300px;border-radius:12px;margin:0 auto;text-align:center;"
         IMG.setAttribute('src',val.src)
         let TEXT = document.createElement('p')
         TEXT.style.cssText ="width:60%;height:auto;font-size:30px;"
         TEXT.innerHTML = val.text
         inforCon.append(IMG)
         inforCon.append(TEXT)
       })
       Div.append(img)
       Div.append(ptag)
       Div.append(ptag1)
       Div.append(ptag2)
       Div.append(Btnper)
       Main.append(Div)
       Ban.addEventListener('keypress',function(event)
       {
        if(event.keyCode == 13)
        {
          if(Ban.value == 'Russia')
          {
            if(Div.getAttribute('name') == 'Russia')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Russia')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Canada')
          {
            if(Div.getAttribute('name') == 'Canada')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Canada')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'China')
          {
            if(Div.getAttribute('name') == 'China')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'China')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'USA')
          {
            if(Div.getAttribute('name') == 'USA')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'USA')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Brazil')
          {
            if(Div.getAttribute('name') == 'Brazil')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Brazil')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Australia')
          {
            if(Div.getAttribute('name') == 'Australia')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Australia')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'India')
          {
            if(Div.getAttribute('name') == 'India')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'India')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Argentina')
          {
            if(Div.getAttribute('name') == 'Argentina')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Argentina')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Kazaghestan')
          {
            if(Div.getAttribute('name') == 'Kazaghestan')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Kazaghestan')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Algira')
          {
            if(Div.getAttribute('name') == 'Algira')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Algira')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Republic_Kongo')
          {
            if(Div.getAttribute('name') == 'Republic_Kongo')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Republic_Kongo')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'SoudiArabia')
          {
            if(Div.getAttribute('name') == 'SoudiArabia')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'SoudiArabia')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Mexico')
          {
            if(Div.getAttribute('name') == 'Mexico')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Mexico')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Indonisia')
          {
            if(Div.getAttribute('name') == 'Indonisia')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Indonisia')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Soudan')
          {
            if(Div.getAttribute('name') == 'Soudan')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Soudan')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Libia')
          {
            if(Div.getAttribute('name') == 'Libia')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Libia')
            {
              Div.style.display = 'none'
            }
          }
          if(Ban.value == 'Iran')
          {
            if(Div.getAttribute('name') == 'Iran')
            {
              Div.style.display = 'block'
            }
            else if(Div.getAttribute('name') != 'Iran')
            {
              Div.style.display = 'none'
            }
          }
        }
       })
       selectBox.addEventListener('change',function()
       {
        if(selectBox.value == 'all')
         {
          Div.style.display = 'block'
          Main.style.display = 'flex'
          inforCon.style.display='none'
         }
         if(selectBox.value == 'null')
         {
          Div.style.display = 'none'
          Main.style.display = 'flex'
          inforCon.style.display='none'

         }
        if(selectBox.value == 'Asia')
        {
           if(Div.getAttribute('id')== 'Asia')
           {
             Div.style.display = 'block'
             Main.style.display = 'flex'
             inforCon.style.display='none'

           }
           else if(Div.getAttribute('id') != 'Asia')
           {
             Div.style.display = 'none'
           }
        }
        if(selectBox.value == 'Europe')
        {
           if(Div.getAttribute('id')== 'Europe')
           {
             Div.style.display = 'block'
             Main.style.display = 'flex'
             inforCon.style.display='none'

           }
           else if(Div.getAttribute('id') != 'Europe')
           {
             Div.style.display = 'none'
           }
        }
        if(selectBox.value == 'Africa')
        {
           if(Div.getAttribute('id')== 'Africa')
           {
             Div.style.display = 'block'
             Main.style.display = 'flex'
             inforCon.style.display='none'

           }
           else if(Div.getAttribute('id') != 'Africa')
           {
             Div.style.display = 'none'
           }
        }
        if(selectBox.value == 'North America')
        {
           if(Div.getAttribute('id')== 'North America')
           {
             Div.style.display = 'block'
             Main.style.display = 'flex'
             inforCon.style.display='none'

           }
           else if(Div.getAttribute('id') != 'North America')
           {
             Div.style.display = 'none'
           }
        }
        if(selectBox.value == 'South America')
        {
           if(Div.getAttribute('id')== 'South America')
           {
             Div.style.display = 'block'
             Main.style.display = 'flex'
             inforCon.style.display='none'

           }
           else if(Div.getAttribute('id') != 'South America')
           {
             Div.style.display = 'none'
           }
        }
        
       }) 
       
      })
    
