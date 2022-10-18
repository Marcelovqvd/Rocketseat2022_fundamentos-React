import { Avatar } from "./Avatar";

export function SideBar() {
    return (
        <aside>
            <div>
                <Avatar src="https://github.com/marcelovqvd.png" />
                <strong>Marcelo Vasques</strong>
                <span>WebDeveloper</span>
            </div>

            <footer>
                <a href="#">
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}