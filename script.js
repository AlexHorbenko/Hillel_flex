'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.hide');
    console.dir(form);
    const div = document.querySelector('.registration');
    console.dir(div);

    setTimeout(checkIn, 3000);

    function checkIn() {

        div.innerHTML = `
        <h3>Book your slot</h3>
        <fieldset class='data'>
            <legend>Your data</legend>
                <div class="fio">
                    <input class="fio-input" type="text" name="your-name" placeholder="First name" autofocus required autocomplete="off">
                    <input class="fio-input" type="text" name="second-name" placeholder="Second name" autocomplete="off">
                </div>
                <div class="fio">
                    <input class="fio-input" type="tel" name="phone" placeholder="###-##-##" autocomplete="off">
                    <input class="fio-input" type="email" name="email" placeholder="i@am.happy">
                </div>
                <div class="choice">
                    <label>
                        <input type="radio" name="connect" value="tel"> Mobile
                    </label>
                    <label>
                        <input type="radio" name="connect" value="mail" checked> E-mail
                   </label>
                </div>
        </fieldset>
        <fieldset class='book'>
            <legend>Your choice</legend>
                <div class='visit'>
                    <div>
                        <select class='fio-input' name="master" id="#" multiple size="4" required>
                            <optgroup label="Kyiv">
                                <option value="alex">Alex</option>
                                <option velue="danya">Danya</option>
                                <option value="dont-care" selected>Don't care</option>
                            </optgroup>
                            <optgroup label="Bucha">
                                <option value="alex" selected>Alex</option>
                                <option velue="danya">Danya</option>
                                <option value="dont-care">Don't care</option>
                            </optgroup>
                        </select>
                    </div>
                    <input class='fio-input' type="date" name="date" required>
                </div>
                <textarea class='fio-input' rows="5" cols="15" name="message" placeholder="Your message"></textarea>
        </fieldset>
        
        <div class='master'>
            <input class='master-input' type="submit" value="Send">
            <input class='master-input' type="reset" value="Reset">
        </div>
        `;

        // form.classList.add('form');
        form.classList.remove('hide');
        form.append(div);

    }


})