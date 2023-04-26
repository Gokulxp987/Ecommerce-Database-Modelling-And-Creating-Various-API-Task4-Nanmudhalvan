import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* ShopEasy */}
						<a
							rel='noopener noreferrer'
							href='https://github.com/iammelvink'
							target='_blank'
							className='melvin-kisten'
						>
							<i className='fas fa-user-circle'></i> ShopEasy
						</a>
						Copyright &copy; React E-Commerce
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
