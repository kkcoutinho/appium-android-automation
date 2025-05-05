// Para rodar o teste: npx wdio run wdio.conf.js

import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screenObject/menu.screen.js'
import LoginScreen from '../screenObject/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => { //async/await = promise
        await MenuScreen.accessLoginScreen();
        await LoginScreen.fillLoginForm();
        await expect($(LoginScreen.errorMessage)).toHaveText('Provided credentials do not match any user in this service.');     
    })
})

