import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// Las props se desestructuran directamente del objeto 'props'
function PortfolioProject({ title, text, listgroup, link }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
      {/* Asegúrate de que listgroup sea un array antes de mapear */}
      {listgroup && Array.isArray(listgroup) && (
        <ListGroup className="list-group-flush">
          {listgroup.map((item, index) => (
            <ListGroup.Item key={index}>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Card.Body>
        {/* Asegúrate de que link y link.url existan antes de acceder a ellos */}
        {link && link.url && link.title && (
          <Button href={link.url}>{link.title}</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default PortfolioProject;