import React from "react"
import {Container} from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const About = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						{" "}
						<img
							src='../../public/apj.jpg'
							alt='image'
							className=' h-100 w-100'
						/>{" "}
					</Col>
					<Col>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							perspiciatis fuga sequi, nam ullam a excepturi recusandae eaque
							eveniet. Inventore consequuntur illo quibusdam obcaecati ab error,
							quae, expedita ut optio officia provident tempore ea iure. Maiores
							quidem, repellendus corrupti, atque quod sit delectus vero debitis
							accusantium, optio animi labore necessitatibus consequatur modi
							voluptatem unde soluta quasi blanditiis? Pariatur eligendi soluta
							numquam modi nobis incidunt illo dicta libero corporis tempora
							veniam esse qui quidem dolorem rem reprehenderit odio adipisci
							quaerat, mollitia, cupiditate nulla deleniti laborum ipsa. Minima
							nesciunt consequuntur mollitia debitis vel, dolor dolorem nemo
							ducimus nam asperiores ut odio rerum recusandae aliquam a facere
							quos! Similique, fugiat error? Earum ut vitae, provident obcaecati
							consequatur cupiditate ea beatae distinctio sunt quia quis
							laboriosam est, doloremque id, cum dolore? Quidem minus, fuga
							magni soluta fugit impedit molestiae repellat laborum nihil earum
							explicabo. Ullam dolorem aliquam optio corporis aut nostrum
							voluptate non illo accusantium dicta quod, quisquam, eligendi
							inventore doloremque vitae dignissimos cupiditate nulla dolores
							nesciunt tempora quidem quibusdam voluptatibus et error. Dolores
							impedit sint consectetur laudantium, quas iste. Cum, atque.
							Reiciendis, voluptate! Perspiciatis aliquam fugiat alias eaque
							provident facere ducimus rem ab dolorum. Facere ipsum explicabo
							culpa illum vitae ea, corporis odio?
						</p>
						<div className='buttons'>
							<Button variant='primary'>Primary</Button>
							<Button variant='success'>Success</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default About