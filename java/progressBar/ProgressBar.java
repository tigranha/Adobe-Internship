
import javax.swing.*;
import java.awt.*;

public class ProgressBar {
    JFrame frame = new JFrame();
    JProgressBar bar = new JProgressBar(0, 100);

    public ProgressBar() {

        bar.setValue(0);
        bar.setBounds(10, 100, 215, 50);
        bar.setStringPainted(true);
        bar.setFont(new Font("Comic Sans MS", Font.BOLD, 25));
        bar.setForeground(Color.GREEN);
        bar.setBackground(Color.BLACK);

        frame.add(bar);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(250, 250);
        frame.setLayout(null);
        frame.setVisible(true);

        fillTheBar();
    }

    public void fillTheBar() {
        int counter = 0;
        long startMillis = System.currentTimeMillis();

        while (counter <= 100) {
            if (System.currentTimeMillis() - startMillis >= 50) {
                startMillis = System.currentTimeMillis();
                counter++;
                bar.setValue(counter);
            }
        }
        bar.setString("Done!");
    }
}
