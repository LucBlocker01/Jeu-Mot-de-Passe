import { useRef, useEffect } from 'react'

function Password({passV, setPassV}) {

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
            <textarea class="passInput" ref={textareaRef} value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;