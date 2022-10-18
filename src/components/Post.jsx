import { Comment } from "./Comment";

export function Post() {
    return (
        <article>
            <header>
                <div>
                    <div>
                        <strong>Marcelo Vasques</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="17 de outubro de 2022">Publicado há 1 hora</time>
            </header>

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A harum magnam praesentium velit id eligendi maxime eaque. Harum deleniti repudiandae, veniam facilis consequuntur laboriosam. Illo error eveniet dignissimos ratione quis.
                </p>
                <p><a href="">design</a></p>
            </div>

            <form>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"></textarea>
                <button type="submit">Publicar</button>
            </form>

            <div>
                <Comment />
            </div>
        </article>
    )
}