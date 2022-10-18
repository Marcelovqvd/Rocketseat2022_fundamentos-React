import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div>
            <Avatar src="https://github.com/marcelovqvd.png" />
            <div>
                <div>
                    <header>
                        <div>
                            <strong>Marcelo Vasques</strong>
                            <time title="17 de outubro de 2022">Publicado há 1 hora</time>
                        </div>

                        <button>
                        </button>
                    </header>

                    <p>Parabéns!!</p>
                </div>

                <footer>
                    <button>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}