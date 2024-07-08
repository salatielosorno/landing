export default function Footer() {
    return (
        <footer className="mt-5 bg-[#F2B263] p-4 text-white text-xs" style={{ 'position': 'relative' }}>
            <div className="center flex justify-center space-x-4">
                <p>* Los precios no incluye costo por envío. Pedidos con mínimo 5 días de anticipación al evento. Todos los pedidos pasan a lista de espera con el 50% de anticipo.</p>
            </div>
            <br />
            <hr />
            <br />
            <div className="center flex justify-center space-x-4"><p>Sofy Piñatas </p>
                <span>|</span>
                <span

                    className="font-medium text-white"
                >
                    2024
                </span>
                <div className="chat-support__icons">
                    <a
                        className="chat-support__icon block mb-2"
                        href="https://api.whatsapp.com/send/?phone=5212223609002"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/images/whats-icon.png" alt="whats-app-icon" />
                    </a>
                    {/* <div className="chat-support__icon"></div> */}
                </div>
            </div>
            <br />
            <br />
            <br />
        </footer>
    )
}
