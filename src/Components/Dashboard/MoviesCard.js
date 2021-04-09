import React, {Component} from 'react';
import { Card, List, Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';




const { Meta } = Card;


class MoviesCard extends Component
{
	render()
	{
		const rows = [];

		for(let i = 0; i < this.props.count; i++)
		{
			rows.push(
				<Col>
					<Card hoverable style={{ width: 300, margin: 10}} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
						<Meta title="Second Man on Earth"  description={[
							<div>
								<p>"Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather"</p>
								<Row>
									<Text>Hii</Text>
									<Text>    njh</Text>
								</Row>
							</div>
						]}/>
					</Card>
				</Col>
			);
		}

		return(
			<div style={{marginLeft: "50px", marginBottom: "50px"}}>
				<Col>
				<h4 style={{color:"white", fontSize: "25px"}}>Latest Movies</h4>
					<Row>
					{
						rows
					}
					</Row>
				</Col>
			</div>
		);
	}
}

export default MoviesCard;