function Button({type = "", children, onClick, text, className}) {
    return <div>
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={!text.length ? true : false}
          >
            {children}
          </button>
    </div>
}

export default Button