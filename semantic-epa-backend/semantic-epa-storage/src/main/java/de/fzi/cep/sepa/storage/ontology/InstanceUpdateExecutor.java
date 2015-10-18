package de.fzi.cep.sepa.storage.ontology;

import org.openrdf.query.MalformedQueryException;
import org.openrdf.query.QueryEvaluationException;
import org.openrdf.query.UpdateExecutionException;
import org.openrdf.repository.Repository;
import org.openrdf.repository.RepositoryException;

import de.fzi.cep.sepa.model.client.ontology.Instance;
import de.fzi.cep.sepa.storage.sparql.QueryBuilder;

public class InstanceUpdateExecutor extends UpdateExecutor {

private Instance instance;
	
	public InstanceUpdateExecutor(Repository repository, Instance instance) {
		super(repository);
		this.instance = instance;
	}

	@Override
	public void deleteExistingTriples() throws RepositoryException,
			QueryEvaluationException, MalformedQueryException,
			UpdateExecutionException {
		executeUpdate(QueryBuilder.deleteInstanceDetails(instance.getElementHeader().getId()));
	}

	@Override
	public void addNewTriples() throws RepositoryException,
			QueryEvaluationException, MalformedQueryException,
			UpdateExecutionException {
		executeUpdate(QueryBuilder.addInstanceDetails(instance));
	}
}
