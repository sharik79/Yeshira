function(doc) {
	if (doc["type"] == "user") {
		emit(doc["email"], null);
		emit(doc["phone"], null);
	}
}
