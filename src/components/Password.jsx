import { useRef, useEffect } from 'react'

function Password({passV, setPassV, length, fulfilledStatus}) {

    const textareaRef = useRef(null);

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

        console.log('Initial scrollHeight:', textarea.scrollHeight);
    console.log('Line Height:', window.getComputedStyle(textarea).lineHeight);
    console.log('Font Size:', window.getComputedStyle(textarea).fontSize);
    console.log('Padding:', window.getComputedStyle(textarea).padding);
    console.log('textarea.offsetHeight:', textarea.offsetHeight); // Element height
    console.log('textarea.scrollHeight:', textarea.scrollHeight); // Scroll height (content height)
    console.log('textarea.clientHeight:', textarea.clientHeight);

        resizeInput();

        return () => {
            textarea.removeEventListener('input', resizeInput);
        };
    }, [])

    return (
        <div class="password">
            <label>Mot de passe</label>
            <textarea ref={textareaRef} value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;