
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Collection;

/*
TODO: 1. fix the code that is responsible for copying instances of Collections
      and elements of those (at the moment elements are set to null in destination Collection)
      2. add functionality for copying arrays  
 */
public class DeepCopyUsingReflection {

    public static Object deepCopy(final Object source) {
        try {
            if (source == null) {
                return null;
            }

            Class<?> clazz = source.getClass();
            final Object destination = clazz.getDeclaredConstructor().newInstance();

            while (clazz != null) {
                copyField(source, clazz, destination);
                clazz = clazz.getSuperclass();
            }
            return destination;
        } catch (InstantiationException | IllegalAccessException | NoSuchMethodException | InvocationTargetException e) {
            return null;
        }
    }

    private static void copyField(final Object source, final Class<?> clazz, final Object destination) throws IllegalAccessException {
        final Field[] fields = clazz.getDeclaredFields();

        for (final Field field : fields) {
            field.setAccessible(true);

            if (field.get(source) instanceof Collection) {
                final Collection<?> copiedCollection = deepCopyCollection((Collection<?>) field.get(source));
                field.set(destination, copiedCollection);
            } else {
                field.set(destination, field.get(source));
            }
        }
    }

    public static Collection<?> deepCopyCollection(final Collection<?> collection) {
        if (collection == null) {
            return null;
        }
        final Collection<Object> result = new ArrayList<>();
        for (final Object each : collection) {
            result.add(deepCopy(each));
        }
        return result;
    }
}
