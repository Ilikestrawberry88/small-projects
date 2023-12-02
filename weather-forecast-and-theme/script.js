        // this is to make weather forecast.
        const select = document.querySelector('#weather');
        const text = document.querySelector('#text');
        
        select.addEventListener('change', setWeather);
        
        function setWeather() {
        
            const choice = select.value;
        
            choice == 'sunny' ? text.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.' :
            choice == 'rainy' ? text.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.": 
            choice == 'snowing' ? text.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman." :
            choice == 'overcast' ? text.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case." : 
            text.textContent = '' ;  
        };
        
                // This is for change the background color.
        const background = document.querySelector('body');
        const theme = document.querySelector('#theme');
        document.body.style.padding = '9px';
        
        theme.addEventListener('change', () => {
                const honeyDew = '#F0FFF0';
                const black = '#2A2A2A';
                const honeysuckle = '#E0FF67';
                const blueGem = '#1F0098';
                const aquamarineBlue = '#70D2E6';
                const meteorite = '#422677';
                const thistle = '#D7BEDE';
                const myrtle = '#1A4022';


                theme.value === '' 
                ? setBackground('white', black) 
                : theme.value === 'honeysuckle'
                ? setBackground(honeysuckle, blueGem)
                : theme.value === 'aquamarine-blue'
                ? setBackground(aquamarineBlue, meteorite)
                : theme.value === 'thistle'
                ? setBackground(thistle, myrtle)
                : theme.value === 'honey-dew'
                ? setBackground(honeyDew, black)
                : setBackground(black, 'white');

        });
        
        function setBackground(bgColor, textColor) {
                background.style.backgroundColor = bgColor;
                background.style.color = textColor;
        }
        