public class Sentence {

    private final String[] words = new String[5];
    private int count = 0;

    public void append(String word) {
        if (count == 5) {
            System.out.println("Couldn't add the word");
        } else {
            words[count] = word;
            count++;
        }
    }

    public int getWordsCount() {
        return count;
    }

    public String getValue() {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < count; i++) {
            if (i == count - 1) {
                sb.append(words[i]);
            } else {
                sb.append(words[i]).append(" ");
            }
        }
        return sb.toString();
    }
}
