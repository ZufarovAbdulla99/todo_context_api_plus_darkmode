export default function Input({text, setText, className}) {
    return <div>
        <input
              id="user-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={className}
              placeholder="Type something..."
            />
    </div>
}