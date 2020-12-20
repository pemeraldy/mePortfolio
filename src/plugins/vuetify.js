import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
// let darkBlue = 
// {
//     primary: '#1976D2',
        // cardBackground: '#1b2635',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107',
            // '#061428;'
//   }
export default new Vuetify({
    theme: {
        dark: true,
        themes: {
          dark: {
              primary: '#1b2635',
            background: '#0a192f',            
            backgroundSecondary: '#233044',
            deepBackground: '#061428',
            accent: '#233044',
            success: '#64ffda',
            primaryText: '#8892b0',
            headerTextSecondary: '#ccd6f6',            
          },
          light: {
            background: '#d0f0c0'
          }
        }
      }

});
