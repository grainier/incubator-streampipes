package de.fzi.cep.sepa.sources.samples.wunderbar;

import de.fzi.cep.sepa.commons.Utils;
import de.fzi.cep.sepa.desc.declarer.EventStreamDeclarer;
import de.fzi.cep.sepa.model.impl.EventGrounding;
import de.fzi.cep.sepa.model.impl.EventStream;
import de.fzi.cep.sepa.model.impl.TransportFormat;
import de.fzi.cep.sepa.model.impl.eventproperty.EventPropertyPrimitive;
import de.fzi.cep.sepa.model.impl.graph.SepDescription;
import de.fzi.cep.sepa.model.vocabulary.MessageFormat;
import de.fzi.cep.sepa.model.vocabulary.XSD;
import de.fzi.cep.sepa.sources.samples.config.ProaSenseSettings;

public abstract class AbstractWunderbarStream implements EventStreamDeclarer {

	
	public EventStream prepareStream(SepDescription sep, WunderbarVariables variable) {
		
		EventStream stream = new EventStream();
		stream.setName(variable.eventName());
		stream.setDescription(variable.description());
		stream.setUri(sep.getUri() + variable.path());
		
		EventGrounding grounding = new EventGrounding();
		grounding.setTransportProtocol(ProaSenseSettings.jmsProtocol(WunderbarConfig.topicPrefix + variable.topic()));
		grounding.setTransportFormats(Utils.createList(new TransportFormat(MessageFormat.Json)));
				
		stream.setEventGrounding(grounding);	
		
		return stream;
	}
	
	@Override
	public void executeStream() {
		
	}

	@Override
	public boolean isExecutable() {
		return false;
	}

	
	public EventPropertyPrimitive timestampProperty() {
		return new EventPropertyPrimitive(XSD._long.toString(), "variable_timestamp", "", Utils.createURI("http://schema.org/DateTime"));
	}
}