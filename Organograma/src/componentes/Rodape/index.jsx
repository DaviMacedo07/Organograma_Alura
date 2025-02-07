import './Rodape.css'


const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'></a>
                        <img src="/imagens/fb.png" alt="" />
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'></a>
                        <img src="/imagens/tw.png" alt="" />
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'></a>
                        <img src="/imagens/ig.png" alt="" />
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>Desenvolvido por Daví Macedo</p>
            </section>
        </footer>
    )
}

export default Rodape