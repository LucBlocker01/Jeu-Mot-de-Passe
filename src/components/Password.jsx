import { useRef, useEffect } from 'react'

function Password({passV, setPassV, length, fulfilledStatus}) {

    const textareaRef = useRef(null);

    const passVLength = Array.from(passV.matchAll(/./gu), match => match[0]).length

    function handleChange(event) {
        setPassV(event.target.value);
    }

    useEffect(() => {
        const textarea = textareaRef.current
        textarea.addEventListener("input", resizeInput)

        function resizeInput() {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }

        resizeInput();

        return () => {
            textarea.removeEventListener('input', resizeInput);
        };
    }, [])

    return (
        <div class="password">
            <label>Mot de passe</label>
            <div class="passInput">
                <textarea ref={textareaRef} value={passV} onChange={handleChange}/>
                <p class="passVLength">{passVLength}</p>
            </div>
        </div>
    )
}

export default Password;