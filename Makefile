DOCFILES = docs
HTMLFILES = html

DOCS = \
	${DOCFILES}/intro.md\
	${DOCFILES}/loading.md\
	${DOCFILES}/rendering.md\
	${DOCFILES}/selectors.md\
	${DOCFILES}/attributes.md\
	${DOCFILES}/traversing.md\
	${DOCFILES}/manipulation.md\
	${DOCFILES}/miscellaneous.md\
	${DOCFILES}/utils.md\
	${DOCFILES}/thanks.md\
	${DOCFILES}/license.md

docs: 
	@cat ${DOCS} > readme.md
	@markdown readme.md > index.html
	
clean:
	@rm -f index.html

build: clean doc
	@cat ${HTMLFILES}/intro.html Readme.md ${HTMLFILES}/outro.html > index.html
	@echo "Successfully build readme.md and index.html"

.PHONY: docs