    let changePage = document.getElementById("link")
    changePage.addEventListener("click", change)

    let roll = document.getElementById("changeSelector")

    let loading =document.getElementById("loadingPicture")

    function change(){
        pictureDog.style=""
        if(changePage.value =="Race Selector"){
            changePage.value = "Random Selector"
            summon.value = "Get Race Dog"

            roll.innerHTML = '<select id="selectDog"><option>Loading</option>'
            selectDog = document.getElementById("selectDog")

                //promises for correct template render
                window.setTimeout(function() {
                    dogAllBreeds();
                    
                        window.setTimeout(function() {
                        objectExtraction();
                        
                            window.setTimeout(function() {
                            selection();
                            }, 0);
                        },1500); 
                    }, 0);
                
        }
        else {
            changePage.value ="Race Selector"
            summon.value = "Get Random Dog"
            roll.innerHTML = ''
        }
        pictureDog.src = ""
        loading.innerHTML = ""
    }

    let summon = document.getElementById("summon")
    summon.addEventListener("click",dog)
    
    let pictureDog = document.getElementById("randomDog")
    

    function dog(){
        pictureDog.src = "";
        loading.innerHTML = "<p>Loading Image</p>";
        if(selectDog.innerHTML =="<option>Loading</option>" &&summon.value == "Get Race Dog"){
        loading.innerHTML = "<p>Wait for races load</p>";
        }
        if(summon.value == "Get Random Dog"){
            $.getJSON('https://dog.ceo/api/breeds/image/random', function(data) {
                pictureDog.src=data.message;
                loading.innerHTML = "";
            });
        }
        else {

            dataDogArray=selectDog.value.split(/(\s+)/)
                        if (dataDogArray.length == 1){
                            race = dataDogArray[0]
                            subRace = ""
                        }
                        else{
                            race = dataDogArray[0]
                            subRaceType = dataDogArray[2]
                            subRace = ("/"+subRaceType)
                        }

                    $.getJSON('https://dog.ceo/api/breed'+subRace+'/'+race+'/images/random', function(data){
                        pictureDog.src =data.message;    
                        loading.innerHTML = "";     
                    });
        }
        pictureDog.style="border: solid 2px white;"
    }


        //function to get list of races and sub races from dog api
        var breeds
        function dogAllBreeds(){
        $.getJSON('https://dog.ceo/api/breeds/list/all', function(data) {
        objeto = data.message
            });
        }

    //function to extract all races and subraces and sort on individuals values for be selected
        function objectExtraction(){
        races = []
        

            for (i=0; i<Object.keys(objeto).length; i++){
                
                if (Object.values(objeto)[i] == ""){
                    
                    races.push(Object.keys(objeto)[i])
                }
                
                else{
                    for (l=0; l<Object.values(objeto)[i].length; l++){

                        if (Object.values(objeto)[i][l].length == 1){
                        }

                        else{
                        races.push([Object.values(objeto)[i][l],Object.keys(objeto)[i]])
                        }
                    }
                    if (Object.values(objeto)[i][0].length == 1){
                        races.push([Object.values(objeto)[i],Object.keys(objeto)[i]])
                    }
                }
            }   return races
        }
    
    //getting selector tag from html
        
            

    //function to get the return of extraction and use to put in selector tag
        function selection(){
            selectDog.innerHTML = ""
            for(i=0 ; i<races.length ; i++){
                if (races[i].length <3){
                    selectDog.innerHTML += "<option>"+races[i][0]+" "+races[i][1]+"</option>"
                }
            
                else{
                    selectDog.innerHTML += "<option>"+races[i]+"</option>"
                }
            }
            selectDog.style ="background-color:white"
            if(summon.value == "Get Race Dog"){
            loading.innerHTML = "<p>Races Loaded</p>"}
            
        }