import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* BACKGROUND DECOR */}
      <View style={[styles.glowBlob, { top: '-10%', left: '-20%', backgroundColor: '#0ea5e950' }]} />
      <View style={[styles.glowBlob, { bottom: '-15%', right: '-25%', backgroundColor: '#22d3ee30' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* SECTION FOTO PROFILE */}
        <View style={styles.profileContainer}>
          <View style={styles.photoFrameOuter}>
            <View style={styles.photoFrameInner}>
              <Image 
                source={require('../../assets/images/profile1.jpeg')} 
                style={styles.profilePic} 
              />
            </View>
          </View>
          <View style={styles.statusIndicator} />
        </View>

        {/* SECTION IDENTITAS */}
        <View style={styles.identityContainer}>
          <Text 
            style={styles.nameText} 
            numberOfLines={1} 
            adjustsFontSizeToFit={true}
          >
            Samuel Ricardo Mendrofa
          </Text>
          
          {/* JURUSAN DENGAN STYLE MIRING */}
          <Text style={styles.majorText}>Sistem Informasi</Text>
          
          <View style={styles.nimBadgeOuter}>
            <View style={styles.nimBadgeInner}>
              <Text style={styles.nimText}>243303621285</Text>
            </View>
          </View>
        </View>

        {/* SECTION QUOTE CARD */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteMark}>“</Text>
          <Text style={styles.quoteText}>
            There is surely a future hope for you, and your hope will not be cut off.
          </Text>
          <View style={styles.quoteDivider} />
          <Text style={styles.quoteAuthor}>— Proverbs 23:18</Text>
        </View>
        
        {/* FOOTER */}
        <Text style={styles.unpriText}>Universitas Prima Indonesia</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  glowBlob: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    opacity: 0.1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  profileContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  photoFrameOuter: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  photoFrameInner: {
    width: 136,
    height: 136,
    borderRadius: 68,
    borderWidth: 2,
    borderColor: '#0ea5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#34d399',
    borderWidth: 3,
    borderColor: '#020617',
  },
  identityContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#f8fafc',
    textAlign: 'center',
    width: '100%',
  },
  majorText: {
    fontSize: 17, // Sedikit diperbesar
    color: '#cbd5e1',
    fontWeight: '500',
    fontStyle: 'italic', // Membuat teks miring
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.9,
  },
  nimBadgeOuter: {
    marginTop: 15,
    borderRadius: 20,
  },
  nimBadgeInner: {
    backgroundColor: 'rgba(34, 211, 238, 0.1)',
    borderWidth: 1,
    borderColor: '#22d3ee80',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  nimText: {
    color: '#22d3ee',
    fontWeight: '800',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  quoteCard: {
    backgroundColor: '#0f172a',
    width: '100%',
    padding: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1e293b',
    alignItems: 'center',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  quoteMark: {
    fontSize: 60,
    color: '#0ea5e9',
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: -35,
    marginTop: -10,
    opacity: 0.6,
  },
  quoteText: {
    color: '#f1f5f9',
    fontSize: 18,
    fontStyle: 'italic',
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '400',
  },
  quoteDivider: {
    width: 40,
    height: 2,
    backgroundColor: '#0ea5e9',
    marginVertical: 15,
    borderRadius: 1,
  },
  quoteAuthor: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  unpriText: {
    color: '#475569',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});