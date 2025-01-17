import { useState, useRef, useEffect } from 'react'

function Password({passV, setPassV, length, fulfilledStatus}) {

    let [fireSpreading, setFireSpreading] = useState(false);

    const textareaRef = useRef(null);
    let passVRef = useRef();
    let fulfilledStatusRef = useRef();

    function handleChange(event) {
        setPassV(event.target.value);
    }

    function fireSpread() {
        let passV = passVRef.current;
        let newPassV = [...passV];
        let newFireIndexes = []
        for (let characterIndex = 0; characterIndex < passV.length-1; characterIndex++) {
          if (newPassV[characterIndex] === "🔥") {
            if (characterIndex > 0 && newPassV[characterIndex-1] !== "🔥") {
              newFireIndexes.push(characterIndex-1)
            }
            if (characterIndex < passV.length - 1 && newPassV[characterIndex + 1] !== "🔥") {
              newFireIndexes.push(characterIndex+1)
            }
          }
        }
        for (let index of newFireIndexes) {
          newPassV[index] = "🔥";
        }
        setPassV((oldPassV) => {
          if (oldPassV === passV) {
            return newPassV.join("")
          }
          return oldPassV
        })
        if (!fulfilledStatusRef.current[14]) {
          setTimeout(() => fireSpread(), 1200)
        }
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

    useEffect(() => {
        if (length === 14) {
            let characterFlame = 0;
            while (characterFlame === passV.indexOf("🥚") || characterFlame === 0 || Math.abs(characterFlame - passV.indexOf("🥚")) < 3) {
                characterFlame = Math.floor(Math.random()*passV.length)
            }
            const newPassV = passV.slice(0, characterFlame) + "🔥" + passV.slice(characterFlame + 1)
            setPassV(newPassV);
        }
    }, [fulfilledStatus])

    useEffect(() => {
        if (length >= 15 && !fireSpreading) {
          setTimeout(() => {
            fireSpread();
            setFireSpreading(true);
          }, 1200)
        }
      }, [length])

    useEffect(() => {
        passVRef.current = passV;
      }, [passV])

      useEffect(() => {
        fulfilledStatusRef.current = fulfilledStatus;
      }, [fulfilledStatus])

    useEffect(() => {
        if (length === 16) {
            setPassV(passV.replace("🥚", "🐔"))
        }
    }, [length])

    return (
        <div class="password">
            <label>Mot de passe</label>
            <textarea class="passInput" ref={textareaRef} value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;