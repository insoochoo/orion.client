/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env browser, amd*/
define(['orion/plugin', 'orion/editor/stylers/text_x-java-source/syntax', 'orion/editor/stylers/application_x-jsp/syntax'], function(PluginProvider, mJava, mJSP) {

	function connect() {
		var headers = {
			name: "Orion Java Tool Support",
			version: "1.0",
			description: "This plugin provides Java tools support for Orion."
		};
		var pluginProvider = new PluginProvider(headers);
		registerServiceProviders(pluginProvider);
		pluginProvider.connect();
	}

	function registerServiceProviders(pluginProvider) {
		pluginProvider.registerServiceProvider("orion.core.contenttype", {}, {
			contentTypes: [
				{	id: "text/x-java-source",
					"extends": "text/plain",
					name: "Java",
					extension: ["java"]
				}, {id: "application/x-jsp",
					"extends": "text/plain",
					name: "Java Server Page",
					extension: ["jsp"]
				}
			]
		});
		pluginProvider.registerServiceProvider("orion.edit.highlighter", {}, mJava.grammars[mJava.grammars.length - 1]);
		pluginProvider.registerServiceProvider("orion.edit.highlighter", {}, mJSP.grammars[mJSP.grammars.length - 1]);
	}

	return {
		connect: connect,
		registerServiceProviders: registerServiceProviders
	};
});
